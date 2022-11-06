import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CocktailItem from "../../components/CocktailItem.vue";

describe("CocktailItem", () => {
  it("slots layout", () => {
    const wrapper = mount(CocktailItem, {
      slots: {
        image: "img",
        heading: "heading",
        ingredients: "ingredients",
        recipe: "recipe",
      },
    });
    expect(wrapper.html()).toContain("img");
    expect(wrapper.html()).toContain("heading");
    expect(wrapper.html()).toContain("ingredients");
    expect(wrapper.html()).toContain("recipe");
  });
});
