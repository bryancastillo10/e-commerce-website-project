import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { trendsInfo } from "src/constants";
// import { useThemeContext } from "src/context/UseContexts";

export const Trends = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[90%] md:w-full">
        <TabGroup>
          <TabList className="flex gap-4 ">
            {trendsInfo.map(({ name }) => (
              <Tab
                key={name}
                className="blue-glass rounded-full py-1 px-2 text-sm/6 font-semibold  data-[selected]:bg-sky-500
                data-[selected]:text-accent
                data-[hover]:bg-accent
                 text-secondary focus:outline-none"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {trendsInfo.map(({ name, posts }) => (
              <TabPanel
                key={name}
                className="rounded-xl blue-glass text-secondary border-[1px]  p-3"
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5"
                    >
                      <a href="#" className="font-semibold ">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                      <ul className="flex gap-2" aria-hidden="true">
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
  );
};

export default Trends;
