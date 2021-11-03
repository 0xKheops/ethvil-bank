import "tailwindcss/tailwind.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      //  color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "dark",
        value: "#1F2937",
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <div className="text-gray-200 container mx-auto max-w-2xl py-4">
      <Story />
    </div>
  ),
];
