import axios from "axios";

const mockedAxios = axios as jest.Mocked<typeof axios>;
export default mockedAxios;
