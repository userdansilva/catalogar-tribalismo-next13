export interface Design {
  id: number
  title: string
  tags: string

  product_id: number
  product_name: string
  product_archived: "N" | "S"

  category_id: number
  category_name: string
  category_bg: string
  category_text: string
  category_archived: "N" | "S"

  image_id: number
  image_url: string
  image_webp_url: string
  image_position: number
}

export interface Image {
  id: number
  url: string
  webp: string
  position: number
}

export interface Category {
  id: number
  name: string
  color_bg: string
  color_text: string
  archived: "S" | "N"
}

export interface Product {
  id: number
  name: string
  archived: "S" | "N"
}

export interface FormattedDesign {
  id: number
  title: string
  tags?: string
  product: Product
  categories: Category[]
  images: Image[]
}
