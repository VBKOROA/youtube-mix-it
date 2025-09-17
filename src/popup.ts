function toMixList(): void {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        const url = activeTab.url;

        if (!isValidUrl(url)) {
            alert("Youtube 영상 페이지가 필요합니다!");
            return;
        }

        const videoId = extractVideoId(url);
        if (!videoId) {
            alert("Youtube 영상 페이지가 필요합니다!");
            return;
        }

        const mixUrl = createMixUrl(videoId);

        if (typeof activeTab.id === 'number') {
            chrome.tabs.update(activeTab.id, { url: mixUrl }, () => {
                if (chrome.runtime.lastError) {
                    chrome.tabs.create({ url: mixUrl });
                }
            });
        } else {
            chrome.tabs.create({ url: mixUrl });
        }
        window.close();
    });
}

function isValidUrl(url: string | undefined): url is string {
    return url !== undefined && url.trim().length > 0;
}

function extractVideoId(url: string): string | null {
    const trimmedUrl = url.trim();
    if (!trimmedUrl) return null;

    const VIDEO_ID_REGEX = /^[0-9A-Za-z_-]{11}$/;

    try {
        const normalizedUrl = trimmedUrl.startsWith('http') ? trimmedUrl : `https://${trimmedUrl}`;
        const parsedUrl = new URL(normalizedUrl);
        const hostname = parsedUrl.hostname.replace(/^www\./, '');

        if (hostname !== 'youtube.com' && !hostname.endsWith('.youtube.com')) return null;

        const videoId = parsedUrl.searchParams.get('v');
        return videoId && VIDEO_ID_REGEX.test(videoId) ? videoId : null;
    } catch {
        return null;
    }
}

function createMixUrl(videoId: string): string {
    return `https://www.youtube.com/watch?v=${videoId}&list=RD${videoId}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const mixBtn = document.getElementById('mixIt') as HTMLButtonElement | null;
    if (!mixBtn) return;

    mixBtn.addEventListener('click', () => {
        mixBtn.disabled = true;
        toMixList();
    });
});