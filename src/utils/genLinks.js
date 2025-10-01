const generateLinks = (link, uids) => {
    const links = [];

    uids.forEach(uid => {
        links.push(`${link}${uid}`);
    });

    return links;
};

export default generateLinks;
