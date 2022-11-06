import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import MenuList from "../../components/MenuList.vue";

describe("MenuList", () => {
  it("renders properly", () => {
    const wrapper = mount(MenuList);
    expect(wrapper.text()).toMatch("CocktailsBièresMartinisVins");
  });
});
