import axios from 'axios';
import {fetchData} from './fetchData'

jest.mock('axios');

describe(fetchData, () => {
    it('fetches successfully data from an API', async () => {
        const data = {
            data: {
                id:'',
                pneu:''
            }    
        };

        axios.get.mockImplementationOnce(() => Promise.resolve(data));
    });

    it('fetches erroneously data from an API', async () => {
        const errorMessage = 'Network Error';

        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
    });
});