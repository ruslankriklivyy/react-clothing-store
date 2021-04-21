import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

// import { addCategory, createCloth } from '../redux/actions/products';
import { RootState } from '../redux/reducers';
import { Categories } from '../types/types';
import { AdminAvailabelTypes, AdminForm, AdminType, AdminWrapper } from '../styles/AdminStyle';
import axios from 'axios';

const Admin = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state: RootState) => state.products);

  const [categoryValue, setCategoryValue] = React.useState('');
  const [clothValue, setClothValue] = React.useState('');
  const [clothPrice, setClothPrice] = React.useState('');
  const [clothDeliveryWorld, setClothDeliveryWorld] = React.useState('');
  const [clothDeliveryUkraine, setClothDeliveryUkraine] = React.useState('');
  const [clothInfo, setClothInfo] = React.useState([]);
  const [clothPhoto, setClothFile] = React.useState([]);
  const [selectedCat, setSelectedCat] = React.useState(0);
  const [file, setFile] = React.useState('');

  const onAddCategory = () => {
    // dispatch(addCategory(categoryValue));
    setCategoryValue('');
  };

  // addImage = () => {
  //   setClothFile([...clothPhoto, { image: '', number: Date.now() }])
  // }

  const addInfo = () => {
    // @ts-ignore
    setClothInfo([...clothInfo, { description: '', number: Date.now() }]);
  };

  const changeInfo = (key: string, value: string, number: number) => {
    // @ts-ignore
    setClothInfo(clothInfo.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
  };

  // const selectPhoto = (e: any) => {
  //   setClothFile(e.target.files);
  // };

  const selectPhoto = (e: any) => {
    const file = e.target.files[0];
    // @ts-ignore
    setClothFile((prev) => [file, ...prev]);
  };

  const onSelectedCat = (id: number, e: any) => {
    e.preventDefault();
    setSelectedCat(id);
  };

  const sendFiles = async () => {};

  const addCloth = () => {
    const formData = new FormData();
    // @ts-ignore
    clothPhoto.forEach((file) => {
      formData.append('image', file);
    });
    // const { data } = await $host.post('files', fd);
    console.log(clothPhoto);
    formData.append('name', clothValue);
    formData.append('price', `${clothPrice}`);
    formData.append('delivery_world_price', `${clothDeliveryWorld}`);
    formData.append('delivery_ukraine_price', `${clothDeliveryUkraine}`);
    // @ts-ignore
    // formData.append('image', JSON.stringify(fd));

    formData.append('images', 'test');
    formData.append('categoryId', `${selectedCat}`);
    console.log(clothInfo);
    formData.append('info', JSON.stringify(clothInfo));
    // dispatch(createCloth(formData));
  };

  return (
    <AdminWrapper>
      <div>
        <AdminType>
          <h4>Добавить категорию одежды</h4>
        </AdminType>
        <AdminForm>
          <form>
            <label htmlFor="name">Введите имя категории</label>
            <input
              type="text"
              value={categoryValue}
              onChange={(e) => setCategoryValue(e.target.value)}
            />
            <button type="button" onClick={() => onAddCategory()}>
              Добавить
            </button>
          </form>
        </AdminForm>
      </div>
      <div>
        <AdminType>
          <h4>Добавить одежду</h4>
        </AdminType>
        <AdminForm>
          <form>
            <label htmlFor="name">Выберете категорию одежды:</label>
            <AdminAvailabelTypes>
              {categories &&
                categories.map((item: Categories) => (
                  <a
                    href="/"
                    className={classNames('', {
                      active: selectedCat === item.id,
                    })}
                    onClick={(e) => onSelectedCat(item.id, e)}>
                    {item.name}
                  </a>
                ))}
            </AdminAvailabelTypes>
            <label htmlFor="name">Введите название одежды:</label>
            <input type="text" value={clothValue} onChange={(e) => setClothValue(e.target.value)} />
            <label htmlFor="name">Введите цену одежды:</label>
            <input type="text" value={clothPrice} onChange={(e) => setClothPrice(e.target.value)} />
            <label htmlFor="name">Введите цену доставки (по миру):</label>
            <input
              type="text"
              value={clothDeliveryWorld}
              onChange={(e) => setClothDeliveryWorld(e.target.value)}
            />
            <label htmlFor="name">Введите цену доставки (по Украине):</label>
            <input
              type="text"
              value={clothDeliveryUkraine}
              onChange={(e) => setClothDeliveryUkraine(e.target.value)}
            />
            {clothInfo.map((i: any) => (
              <>
                <label htmlFor="name">Введите описание:</label>
                <input
                  type="text"
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
                />
              </>
            ))}
            <button type="button" onClick={() => addInfo()}>
              Добавить описание
            </button>
            <label htmlFor="name">Загрузите изображения одежды:</label>
            <input name="myFile" type="file" onChange={selectPhoto} multiple />
            <button type="button" onClick={() => sendFiles()}>
              Добавить изображения
            </button>
            <button type="button" onClick={() => addCloth()}>
              Добавить
            </button>
          </form>
        </AdminForm>
      </div>
    </AdminWrapper>
  );
};

export default Admin;
