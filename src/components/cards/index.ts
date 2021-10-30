interface IComponent {
  name: string;
}

export const cards: Array<IComponent> = [];
export const cardsMap: any = {};

export const registerCard = (component: IComponent) => {
  cardsMap[component.name] = component;
  cards.push(component);
};

// 注册所有卡片
export const registerAllCards = () => {
  const modules = import.meta.glob("./*/*.vue"); // https://vitejs.dev/guide/features.html#glob-import

  for (const path in modules) {
    modules[path]().then((mod) => {
      registerCard(mod.default as IComponent);
    });
  }
  console.log("注册所有卡片", cardsMap);
};
