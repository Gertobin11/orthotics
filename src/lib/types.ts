export interface OrthoticProduct {
  _type: 'orthotic'
  name: string
  slug: {
    _type: 'slug'
    current: string
  }
  category: 'Prefab' | 'Custom'
  price: number
  summary: string,
  imageUrl?: string,
  details: {
    shell_material: string
    process: string
    control_level: string
    description: string
    best_for: string
    default_specs: {
      top_cover?: string
      mid_layer?: string
      heel_post?: string
      base_plate?: string
    }
  }
}