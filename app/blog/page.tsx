

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The IdeaAscend Ecosystem Explained: Mentors, Talent, Tools & More",
      excerpt: "When you're building a startup, you quickly realize: ideas are just the beginning. Execution is everything—but execution is hard when you're doing it alone.",
      date: "March 15, 2025",
      readTime: "8 min read",
      category: "Ecosystem"
    },
    {
      id: 2,
      title: "Why 90% of Startup Ideas Fail (And How to Beat the Odds)",
      excerpt: "Most startup failures aren't due to bad ideas—they're due to poor execution, lack of market validation, and insufficient resources.",
      date: "March 10, 2025",
      readTime: "6 min read",
      category: "Strategy"
    },
    {
      id: 3,
      title: "How to Land Your Dream Job at a Startup",
      excerpt: "Breaking into the startup world requires a different approach than traditional job hunting. Here's your complete guide.",
      date: "March 5, 2025",
      readTime: "10 min read",
      category: "Career"
    }
  ]

  return (
    <>

      
      <main>
        {/* Blog Header - Mobile First */}
        <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-12 md:py-16 lg:py-20">
          <div className="container-responsive">
            <div className="text-center space-y-4 md:space-y-6">
              <h1>IdeaAscend Blog</h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-balance">
                Insights, strategies, and stories from the startup ecosystem. 
                Learn from founders, mentors, and industry experts.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post - Mobile Responsive */}
        <section className="py-8 md:py-12">
          <div className="container-responsive">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 md:p-8 lg:p-10">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                      Featured
                    </span>
                    <div className="text-sm text-gray-500">
                      {posts[0].date} • {posts[0].readTime}
                    </div>
                  </div>
                  
                  <h2 className="hover:text-primary-600 transition-colors cursor-pointer">
                    {posts[0].title}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {posts[0].excerpt}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                      {posts[0].category}
                    </span>
                    <button className="btn-primary w-full sm:w-auto">
                      Read Full Article
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid - Responsive */}
        <section className="py-8 md:py-12">
          <div className="container-responsive">
            <div className="space-y-6 mb-8">
              <h2 className="text-center">Latest Articles</h2>
            </div>
            
            {/* Mobile: Single column, Tablet: 2 columns, Desktop: 2 columns with larger cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {posts.slice(1).map((post) => (
                <article key={post.id} className="card group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                  <div className="space-y-4">
                    <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2">
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700 w-fit">
                        {post.category}
                      </span>
                      <div className="text-sm text-gray-500">
                        {post.date} • {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-primary-600 text-sm font-medium group-hover:text-primary-700 transition-colors">
                        Read more →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup - Mobile Responsive */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container-responsive">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2>Stay Updated</h2>
              <p className="text-gray-600">
                Get the latest insights and startup advice delivered to your inbox weekly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              
              <p className="text-xs text-gray-500">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container-responsive">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">IA</span>
              </div>
              <span className="font-bold text-lg">IdeaAscend</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 IdeaAscend. Built with mobile-first responsive design.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
} 