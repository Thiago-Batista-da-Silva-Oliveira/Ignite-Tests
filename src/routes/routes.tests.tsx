import { act, screen, waitFor } from "@testing-library/react-native";
import { Routes } from ".";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { render } from "@__tests__/utils/customRender";
import { api } from "@services/api";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";


describe("Routes", () => {
    it("should be render Search screen when city is not selected", async () => {
     render(<Routes />);
     const title = await waitFor(() => screen.findByText(/^escolha um local/i));
     expect(title).toBeTruthy();
    });

    it("should be render Dashboard screen when city is selected", async () => {
        jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });
        const city = {
            id: '1',
            name: 'São Paulo',
            latitude: -23.5489,
            longitude: -46.6388
        } 
        await saveStorageCity(city);
        await act(() => waitFor(() => render(<Routes />)));
        const title = screen.getByText(city.name);
        expect(title).toBeTruthy();
    });
});