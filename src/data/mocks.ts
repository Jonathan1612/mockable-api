let mocks: any[] = [];

// Obtener mocks
export const getMocks = () => {
  return mocks;
};

// Crear un nuevo mock
export const createMock = (mockData: any) => {
  mocks.push(mockData);
  return mockData;
};
