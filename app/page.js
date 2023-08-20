
import Nav from '../components/Nav'
import Feed from '../components/Feed'
export default function Home() {
  return (
    <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className="max-md:hidden"/>
      <span className="green_gradient text-center">AI Powered Prompts</span>
    </h1>
    <p className="desc text-center">Promptopia is an open-source AI platform to discover, create and share interesting and informative prompts</p>
  <Feed/>
  </section>
  )
}
