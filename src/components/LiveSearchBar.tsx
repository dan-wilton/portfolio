import { useStore } from "@nanostores/react";
import { isKBarOpen, searchList, searchTerm } from "../stores/kbarStore";
import { useEffect } from "react";

export default function LiveSearchBar({ items }: { items: string[] }) {
  const $searchList = useStore(searchList);
  const $searchTerm = useStore(searchTerm);

  const handleInputChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    searchTerm.set(value);

    if (value) {
      const matches = items.filter((item) => item.includes(value));
      searchList.set(matches);
    }
  };

  isKBarOpen.subscribe((open: boolean) => {
    if (open) {
      const inputElement = document.getElementById("kbarInput");
      inputElement?.focus();
    }
  });

  useEffect(() => {
    if ($searchTerm == "") {
      searchList.set(items);
    }
  }, [$searchTerm]);

  return (
    <>
      <div className="relative w-full pointer-events-auto h-fit">
        <input
          id="kbarInput"
          type="text"
          className={
            "flex items-center justify-end w-full px-4 py-6 text-sm border-t border-gray-200 rounded-lg ps-12 gap-x-2 focus:border-purple-700 focus:ring-purple-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-purple-600"
          }
          placeholder="This is placeholder"
          onChange={handleInputChange}
          value={$searchTerm}
        />
        <div className="absolute inset-y-0 flex items-center text-gray-400 pointer-events-none dark:text-gray-500 start-0 ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.0"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            ></path>
          </svg>
        </div>
      </div>
      {$searchList &&
        $searchList.map((item) => (
          <div
            className="flex items-center w-full px-4 py-3 text-sm bg-white border-t border-gray-200 rounded-lg justify-content dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            key={item}
          >
            {item}
          </div>
        ))}
    </>
  );
}
