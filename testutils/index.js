/** Test **/
export const findElByTestAtrr = (component, attr) => {
    const element = component.find(`[data-test='${attr}']`);
    return element;
};
