import React from 'react';

const ShowcaseYoutube = ({ url }) => {
  const extractVideoId = (url) => {
    const regExp =
      // eslint-disable-next-line no-useless-escape
      /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=|\?v=|\/v=|\/embed\/|\/\?v=|\/\&v=|youtu.be\/|\/watch\?v=|\/watch\?vi=|youtu.be\/\?|\/embed\?|\/v=|\/e\/|\/v=|\/v\/|\/\?v=|\/\&v=|youtu.be\/\?|\/watch\?v=|\/watch\?vi=)([^#\&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = extractVideoId(url);

  if (!videoId) {
    return <div className="text-red-500">Invalid YouTube URL</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl aspect-w-16 aspect-h-9 mt-10">
        <iframe
          className="w-full h-100 rounded-xl drop-shadow-2"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-presentation"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default ShowcaseYoutube;
