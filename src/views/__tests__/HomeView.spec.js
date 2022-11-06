import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HomeView from "../../views/HomeView.vue";

describe("HomeView", () => {
  it("renders props.title", () => {
    const title = "Test du titre";
    const wrapper = mount(HomeView, {
      props: { title: title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
