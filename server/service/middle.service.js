import { Read, Create } from "../DAL/DALcrud.js";

export async function toRead() {
    try {
        const data = await Read();
        return data;
    } catch (e) {
        console.log(e.message);
    }
}

export async function toReadOne(searchOne) {
    const data = await Read();
    const alldata = JSON.parse(data);

    for (let i = 0; i < alldata.length; i++) {
        if (alldata[i].id_message == searchOne) {
            return alldata[i];
        }
    }
    return "not found";
}

export async function toAdd(newdata) {
    try {
        const data = await Create(newdata);
        return data;
    } catch (e) {
        console.log(e.message);
    }
}

export async function currectIdPost() {
    try {
        const data = await Read();
        const real_id_to_new_post = deflate.length +1
        return real_id_to_new_post;
    } catch (e) {
        console.log(e.message);
    }
}

