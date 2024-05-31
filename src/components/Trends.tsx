import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { trendsInfo } from 'src/constants';
import { useThemeContext } from 'src/context/UseContexts';

export const Trends = () => {
  const { theme } = useThemeContext();

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md">
        <TabGroup>
          <TabList className="flex gap-4">
            {trendsInfo.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-2 text-sm/6 font-semibold  focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {trendsInfo.map(({ name, posts }) => (
              <TabPanel key={name} className="rounded-xl form-glass border-[1px] border-white p-3">
                <ul>
                  {posts.map((post) => (
                    <li key={post.id} className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5">
                      <a href="#" className="font-semibold ">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                      <ul className={`flex gap-2 ${theme ? "text-accent/90" : "text-black"}`} aria-hidden="true">
                        <li>{post.category}</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.shareCounts} shares</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.ratings} star</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}

export default Trends;