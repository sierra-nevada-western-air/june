import type { RenderOptions } from "@testing-library/vue";

export default function renderOptions<T extends object>(
  data: T
): RenderOptions {
  return { props: data };
}
