const isExternalLink = (link) => {
return link.hostname !== location.hostname;
}

const links = document.getElementsByTagName('a');
for (const link of links) {
if (isExternalLink(link)) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
}
}