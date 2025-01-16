import { Typography } from "@material-tailwind/react";
 
export function SimpleFooter() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between top-[0vh]">
      <Typography color="white" className="font-normal">
        &copy; 2025 Bryan Perez
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 ">
        <li>
          <Typography
            as="a"
            href="https://github.com/bryaneperez"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 "
          >
            GitHub
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://www.linkedin.com/in/bryan-perez-6563b2a9/"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            LinkedIn
          </Typography>
        </li>
        
      </ul>
    </footer>
  );
}