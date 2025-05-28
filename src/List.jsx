import React from "react";

const divst = ({ data }) => {
  // Функция получает тип элемента, фильтрует исходный массив по нему и сортирует по id в порядке убывания
  const filterData = (feature) => {
    return data
      .filter((el) => el.feature === feature)
      .sort((a, b) => b.id - a.id);
  };

  // Типы элементов. Прописал заранее, так как важен порядок их отрисовки
  const features = ["other", "penultimate", "last"];

  // Создаю массив объектов с типом и отфильтрованными данными по нему
  const filteredData = features.map((feature) => ({
    feature,
    items: filterData(feature),
  }));

  return (
    <div data-container>
      {filteredData.map(({ feature, items }) =>
        items.map((el) => (

          // data атрибут смог передать только таким способом.
          // Объект с строковым значением ключа деструктуризуется,
          // а его значение для примера true, так как в этом коде не используется
          <div key={el.id} {...{ [`data-featured-${feature}`]: true }}>
            {el.id} {el.feature}
          </div>
        ))
      )}
    </div>
  );
};

export default divst;
