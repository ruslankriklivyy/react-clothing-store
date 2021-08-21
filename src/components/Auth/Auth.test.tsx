import { render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import Auth from './Auth';

describe('Auth component', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  const visibleAuthBlockMock = false;

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('Auth component renders', () => {
    render(
      <Auth
        visibleAuthBlock={visibleAuthBlockMock}
        setVisibleAuthBlock={() => !visibleAuthBlockMock}
      />,
    );
  });

  it('Auth component shows children', () => {
    render(
      <Auth
        visibleAuthBlock={visibleAuthBlockMock}
        setVisibleAuthBlock={() => !visibleAuthBlockMock}
      />,
    );
    expect(screen.getByText('ЭЛ.ПОЧТА')).toBeTruthy();
  });
});
