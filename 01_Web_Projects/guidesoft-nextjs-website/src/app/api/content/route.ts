import { NextRequest, NextResponse } from 'next/server';
import { contentManager } from '@/lib/cms';
import { initializeContent } from '@/data/content';

// Initialize content on startup
initializeContent();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const id = searchParams.get('id');
    const search = searchParams.get('search');

    // Search functionality
    if (search) {
      const results = contentManager.searchContent(search, type || undefined);
      return NextResponse.json({
        success: true,
        data: results,
        total: results.length
      });
    }

    // Get specific content by type and ID
    if (type && id) {
      let content;
      
      switch (type) {
        case 'blogPost':
          content = contentManager.getBlogPost(id);
          break;
        case 'teamMember':
          content = contentManager.getTeamMember(id);
          break;
        default:
          content = contentManager.getContent(id);
      }

      if (!content) {
        return NextResponse.json(
          { success: false, message: 'Content not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        data: content
      });
    }

    // Get content by type
    if (type) {
      let content;
      
      switch (type) {
        case 'homePage':
          content = contentManager.getHomePage();
          break;
        case 'companyInfo':
          content = contentManager.getCompanyInfo();
          break;
        case 'blogPosts':
          content = contentManager.getPublishedBlogPosts();
          break;
        case 'featuredBlogPosts':
          content = contentManager.getFeaturedBlogPosts();
          break;
        case 'teamMembers':
          content = contentManager.getAllTeamMembers();
          break;
        default:
          return NextResponse.json(
            { success: false, message: 'Invalid content type' },
            { status: 400 }
          );
      }

      return NextResponse.json({
        success: true,
        data: content
      });
    }

    // Get all content
    const allContent = Object.fromEntries(contentManager.getAllContent());
    return NextResponse.json({
      success: true,
      data: allContent
    });

  } catch (error) {
    console.error('Content API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, id, content } = body;

    if (!type || !content) {
      return NextResponse.json(
        { success: false, message: 'Type and content are required' },
        { status: 400 }
      );
    }

    // Set content based on type
    switch (type) {
      case 'homePage':
        contentManager.setHomePage(content);
        break;
      case 'companyInfo':
        contentManager.setCompanyInfo(content);
        break;
      case 'blogPost':
        if (!id) {
          return NextResponse.json(
            { success: false, message: 'ID is required for blog posts' },
            { status: 400 }
          );
        }
        contentManager.setBlogPost(id, content);
        break;
      case 'teamMember':
        if (!id) {
          return NextResponse.json(
            { success: false, message: 'ID is required for team members' },
            { status: 400 }
          );
        }
        contentManager.setTeamMember(id, content);
        break;
      default:
        contentManager.setContent(type, content);
    }

    return NextResponse.json({
      success: true,
      message: 'Content updated successfully'
    });

  } catch (error) {
    console.error('Content update error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update content' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  // Alias for POST to handle updates
  return POST(request);
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const id = searchParams.get('id');

    if (!type || !id) {
      return NextResponse.json(
        { success: false, message: 'Type and ID are required' },
        { status: 400 }
      );
    }

    // Delete specific content
    const key = type === 'blogPost' || type === 'teamMember' ? `${type}:${id}` : id;
    const allContent = contentManager.getAllContent();
    
    if (!allContent.has(key)) {
      return NextResponse.json(
        { success: false, message: 'Content not found' },
        { status: 404 }
      );
    }

    allContent.delete(key);

    return NextResponse.json({
      success: true,
      message: 'Content deleted successfully'
    });

  } catch (error) {
    console.error('Content deletion error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete content' },
      { status: 500 }
    );
  }
}