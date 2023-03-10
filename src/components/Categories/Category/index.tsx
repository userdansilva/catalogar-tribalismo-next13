import { Category as CategoryType } from "../../../types/Category";
import { useDesign } from "../../../hooks/useDesign";
import { getIconsById } from "../../../utils/icons";

interface CategoryProps {
  data: CategoryType
  isActive?: boolean
}

export const Category = ({ data: category, isActive }: CategoryProps) => {
  const { handleSelectCategory } = useDesign();

  return (
    <div className="flex flex-col text-center first:ml-8 last:mr-8 md:first:ml-0 md:last:mr-0">
      <button
        type="button"
        className={`m-1 flex h-16 w-16 items-center justify-center rounded-full text-2xl outline-none
        ring-brand-600 focus:ring-offset-2 focus-visible:shadow-lg focus-visible:shadow-brand-300 focus-visible:ring-2
        ${isActive ? "bg-brand-100 text-brand-600 ring-2 ring-offset-2" : "bg-slate-100 text-slate-300"}`}
        onClick={() => handleSelectCategory(category.id)}
      >
        {getIconsById(category.id).icon}
      </button>
      <span className="mt-2 inline-block w-[72px] truncate text-center">{category.name}</span>
    </div>
  );
};
