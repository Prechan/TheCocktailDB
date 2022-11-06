import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import MenuItem from "../../components/MenuItem.vue";

describe("MenuItem", () => {
  it("slots layout", () => {
    const wrapper = mount(MenuItem, {
      slots: {
        image: "img",
        text: "texte",
      },
    });
    expect(wrapper.html()).toContain("img");
    expect(wrapper.html()).toContain("texte");
  });
});
