import { Category } from "./Category";

import { useDesign } from "../../hooks/useDesign";

import { Category as CategoryType } from "../../types/Category";

interface CategoriesProps {
  data: CategoryType[] | null
}

export const Categories = ({ data: categories }: CategoriesProps) => {
  const { category: selectedCategory } = useDesign();

  return (
    <div className="mx-0 my-8">
      <div className="my-0 mx-auto max-w-[1760px] p-0 md:px-8">
        <span className="ml-8 text-base font-semibold text-slate-600 md:ml-0">Categorias</span>
        <div className="no-scrollbar mt-4 flex flex-nowrap gap-4 overflow-x-scroll md:flex-wrap md:overflow-auto">
          <Category
            data={{ id: 0, name: "Todas", favorite: "N" }}
            isActive={selectedCategory === 0}
          />
          {categories?.sort((a) => {
            // This sort put the categories "Novas" at first
            // 215 is its id
            if (a.id === 215) {
              return -1;
            }

            return 1;
          }).map((category) => (
            <Category
              data={category}
              key={category.id}
              isActive={selectedCategory === category.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
