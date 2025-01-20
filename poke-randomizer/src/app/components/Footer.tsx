import { Typography } from "@material-tailwind/react";

export function SimpleFooter() {
  return (
    <footer className="w-full fixed bottom-0 left-0 flex flex-col items-center justify-center py-6 text-center text-white"> 
      <Typography color="white" className="font-normal mb-2">
        Pokémon is &copy; 1995-2025 Nintendo. Website is &copy; 2025 Bryan Perez
      </Typography>
      <ul className="flex flex-wrap justify-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="https://github.com/bryaneperez"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
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
      <span className="border-t border-blue-gray-50 w-full mt-4"></span>
    </footer>
  );
}
