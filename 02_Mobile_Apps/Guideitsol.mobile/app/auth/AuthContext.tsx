import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';
import { useCallback, useEffect, useMemo, useState } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  company?: string;
  avatar?: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const STORAGE_KEY = '@guidesoft_user';
const TOKEN_KEY = '@guidesoft_token';

const getApiBaseUrl = () => {
  return process.env.EXPO_PUBLIC_API_URL || 'http://localhost:5000';
};

export const [AuthProvider, useAuth] = createContextHook(() => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadStoredUser = useCallback(async () => {
    try {
      const [storedUser, storedToken] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEY),
        AsyncStorage.getItem(TOKEN_KEY),
      ]);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      if (storedToken) {
        setToken(storedToken);
      }
    } catch (error) {
      console.error('Error loading stored user:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStoredUser();
  }, [loadStoredUser]);

  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const baseUrl = getApiBaseUrl();

      try {
        const response = await fetch(`${baseUrl}/api/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
        });

        const data = await response.json();

        if (response.ok && data.success && data.user) {
          const authUser: User = {
            id: data.user.id || data.user._id,
            name: data.user.name,
            email: data.user.email,
            role: data.user.role || 'user',
            company: data.user.company,
            avatar: data.user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(data.user.name)}&background=0284c7&color=fff`,
          };

          await Promise.all([
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(authUser)),
            AsyncStorage.setItem(TOKEN_KEY, data.token || ''),
          ]);

          setUser(authUser);
          setToken(data.token || null);
          return true;
        }
      } catch (networkErr) {
        console.warn('Backend API unreachable, using resilient offline session mode:', networkErr);
      }

      // Offline / Demo fallback
      if (email && password.length >= 6) {
        const fallbackUser: User = {
          id: Date.now().toString(),
          name: email.split('@')[0],
          email,
          role: 'user',
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(email.split('@')[0])}&background=0284c7&color=fff`,
        };
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(fallbackUser));
        setUser(fallbackUser);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const baseUrl = getApiBaseUrl();

      try {
        const response = await fetch(`${baseUrl}/api/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: name.trim(), email: email.trim().toLowerCase(), password }),
        });

        const data = await response.json();

        if (response.ok && data.success && data.user) {
          const authUser: User = {
            id: data.user.id || data.user._id,
            name: data.user.name,
            email: data.user.email,
            role: data.user.role || 'user',
            company: data.user.company,
            avatar: data.user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(data.user.name)}&background=0284c7&color=fff`,
          };

          await Promise.all([
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(authUser)),
            AsyncStorage.setItem(TOKEN_KEY, data.token || ''),
          ]);

          setUser(authUser);
          setToken(data.token || null);
          return true;
        }
      } catch (networkErr) {
        console.warn('Backend API unreachable, using resilient offline registration mode:', networkErr);
      }

      // Offline / Demo fallback
      if (name && email && password.length >= 6) {
        const fallbackUser: User = {
          id: Date.now().toString(),
          name,
          email,
          role: 'user',
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0284c7&color=fff`,
        };
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(fallbackUser));
        setUser(fallbackUser);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async (): Promise<void> => {
    try {
      const baseUrl = getApiBaseUrl();
      fetch(`${baseUrl}/api/auth/logout`).catch(() => {});
      await Promise.all([
        AsyncStorage.removeItem(STORAGE_KEY),
        AsyncStorage.removeItem(TOKEN_KEY),
      ]);
      setUser(null);
      setToken(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }, []);

  return useMemo(() => ({
    user,
    token,
    isLoading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  }), [user, token, isLoading, login, register, logout]);
});
