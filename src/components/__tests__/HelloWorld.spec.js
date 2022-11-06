import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import MenuList from "../MenuList.vue";

describe("MenuList", () => {
  it("renders properly", () => {
    const wrapper = mount(MenuList, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
