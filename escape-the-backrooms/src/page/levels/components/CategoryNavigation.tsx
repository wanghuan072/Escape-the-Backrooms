'use client'

interface CategoryNavigationProps {
  categories: Array<{ name: string; count: number; slug?: string }>
}

const categorySlug = (category: string) => category.toLowerCase().replace(/\s+/g, '-')

export function CategoryNavigation({ categories }: CategoryNavigationProps) {
  const scrollToCategory = (category: string, slug?: string) => {
    const target = slug ?? categorySlug(category)
    const element = document.getElementById(target)
    if (!element) return
    const header = document.querySelector<HTMLElement>('.header')
    const headerHeight = header?.offsetHeight ?? 80
    const position = element.getBoundingClientRect().top + window.scrollY - headerHeight - 20
    window.scrollTo({ top: position, behavior: 'smooth' })
  }

  return (
    <nav className="nav-list">
      {categories.map((category) => (
        <a key={category.name} href={`#${category.slug ?? categorySlug(category.name)}`} className="nav-item" onClick={(event) => { event.preventDefault(); scrollToCategory(category.name, category.slug) }}>
          <span className="nav-name">{category.name}</span><span className="nav-count">{category.count}</span>
        </a>
      ))}
    </nav>
  )
}
