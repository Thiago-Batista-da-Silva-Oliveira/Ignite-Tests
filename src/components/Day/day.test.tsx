import { render, screen } from '@testing-library/react-native'
import { Day } from '.';
import clearDay from '@assets/clear_day.svg'

describe("Component: Day", () => {
    it ("should be render correctly", () => {
      render(
        <Day data={{
            day: '18/07',
            min: '30c',
            max: '40c',
            icon: clearDay,
            weather: 'Céu limpo'
        }} />
       )
       expect(screen.getByText('18/07')).toBeTruthy();
    });
})