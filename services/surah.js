import axios from "axios";

export async function getSurah() {
    const response = await axios.get("https://api.quran.sutanlab.id/surah");
    const axiosResponse = response.data;

    return axiosResponse.data;
}

export async function getDetail(id) {
    const response = await axios.get(
        `https://api.quran.sutanlab.id/surah/${id}`
    );
    const axiosResponse = response.data;

    return axiosResponse.data;
}
