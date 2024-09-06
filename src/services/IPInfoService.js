class IPInfoService {
    getLocation = async () => {
        let result = await fetch('https://ipinfo.io/?token=7947d323aae1f3');

        if (!result.ok) {
            throw new Error(`Could not fetch, status: ${result.status}`);
        }

        return await result.json();
    }
}

export default IPInfoService;