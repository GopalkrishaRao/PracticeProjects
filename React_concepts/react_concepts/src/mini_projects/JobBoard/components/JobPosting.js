function JobPosting({url, title, by, time}){
    const formatedTime = new Date(time*1000).toLocaleString();
    return(
    <>
    <div className='post' role="listItem">
        <h2 className='post__tilte'>
            <a 
            className={url? "":"inactiveLInk"}
            href={url}
            target='_blank'
            rel='noopener'>
                {title}
            </a>
            <span className='post__metadata'>
                By {by} - {formatedTime}
            </span>
        </h2>
    </div>
    </>
    )
};

export default JobPosting;