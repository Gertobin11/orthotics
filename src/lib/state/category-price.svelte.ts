export interface CategorySummary {
	name: string;
    title: string;
	lowestPrice: number;
    summary: string
}

class CategoryPriceState {
	#categories = $state<CategorySummary[]>([]);

	get categories() {
		return this.#categories;
	}

    init(data: CategorySummary[]) {
        this.#categories = data;
    }

	getCategoryByName(name: string | undefined) {
		if (!name || !this.#categories) return null;
    
    return this.#categories.find((item) => {
        // The fix: check if 'item' exists before checking 'item.category'
        return item?.name?.toLowerCase() === name.toLowerCase();
    }) ?? null;
}

}

export const categoryPriceState = new CategoryPriceState();
