import NavbarItem from "./NavbarItem";


export default function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg font-bold gap-6 justify-center items-center">
      <NavbarItem title='Trending' param="fetchTrending"/>
      <NavbarItem title='Top Rated' param='fetchTopRated' />
    </div>
  )
}
