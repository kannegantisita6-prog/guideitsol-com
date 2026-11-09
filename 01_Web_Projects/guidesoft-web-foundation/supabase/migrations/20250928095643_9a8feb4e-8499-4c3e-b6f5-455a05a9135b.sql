-- Insert admin user profile for praveen.kanneganti@guideitsol.com
-- First, we need to ensure the user exists in auth.users, but we can only reference them after they sign up
-- So we'll create a function to handle this automatically

-- Create or update the profiles table trigger to handle admin user
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.email),
    CASE 
      WHEN NEW.email = 'praveen.kanneganti@guideitsol.com' THEN 'admin'::user_role
      ELSE 'user'::user_role
    END
  );
  RETURN NEW;
END;
$$;

-- Create trigger for automatic profile creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to promote user to admin (for existing users)
CREATE OR REPLACE FUNCTION public.promote_to_admin(user_email TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  UPDATE public.profiles 
  SET role = 'admin'::user_role, updated_at = NOW()
  WHERE email = user_email;
  
  RETURN FOUND;
END;
$$;

-- If the admin user already exists, promote them
SELECT public.promote_to_admin('praveen.kanneganti@guideitsol.com');