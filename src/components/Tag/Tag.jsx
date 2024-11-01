const Tag = ({tag}) => {
    return (
        <div className="rounded-full px-4 py-2 bg-primGreen bg-opacity-5">
            <p className="text-sm text-primGreen font-medium">{tag}</p>
        </div>
    );
};

export default Tag;