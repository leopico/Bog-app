import './globals.css'
import Navbar from './components/navbar/Navbar'
import DarkMode from './providers/Darkmode'
import ToasterProvider from './providers/ToasterProvider'
import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import Footer from './components/footer/Footer'
import SearchModal from './components/modals/SearchModal'
import getPosts from './actions/getPosts'


export const metadata = {
  metadaBase: new URL('https://leopico-blogapp.vercel.app'),
  title: {
    default: "Blog app is the best website",
    template: "%s | Blog" //this is child title that dynamic route
  },
  description: 'Explore technical insights and cutting-edge topics in our Next.js blog. Stay updated with the latest advancements. Learn, code, and optimize your web development skills. #NextJS',
  verification: {
    google: "google-site-verification=123123123123123" //if already verificated your website with google 
  },
  robots: { //you can set custom root
    index: false,
    follow: true,
    nocache: true,
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const posts = await getPosts();
  const postsTitle = posts.map((post) => ({ title: post.title, id: post.id }))
  const currentUser = await getCurrentUser();
  const role = currentUser?.role

  return (
    <html lang="en" className='light' style={{ colorScheme: 'light' }}>
      <body>
        <DarkMode>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal postsTitle={postsTitle} />
          <Navbar currentUser={currentUser} />
          <div className='pb-10 pt-28 dark:bg-slate-800'>
            {children}
          </div>
          {
            role === 'admin' ? (
              ""
            ) : (
              <Footer currentUser={currentUser} />
            )
          }
        </DarkMode>
      </body>
    </html>
  )
}
