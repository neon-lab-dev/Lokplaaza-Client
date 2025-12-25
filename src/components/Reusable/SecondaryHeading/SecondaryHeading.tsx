const SecondaryHeading = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-neutral-20 font-medium text-3xl md:text-4xl">
        {title}
      </h2>
      <div className="mt-3 bg-secondary-05 h-2 xl:h-4 w-12 lg:w-21 rounded-full"></div>
    </div>
  );
};

export default SecondaryHeading;