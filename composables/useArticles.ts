export function useArticles() {
  const loadAll = async () => {
    const articleFiles = import.meta.glob('/data/articles/*.json', { eager: true })
    return Object.values(articleFiles).map((m: any) => m.default)
  }

  const loadBySlug = async (slug: string) => {
    const articles = await loadAll()
    return articles.find(article => article.slug === slug)
  }

  return { loadAll, loadBySlug }
}
