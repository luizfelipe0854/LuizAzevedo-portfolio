function ExperienceList({ data }) {
  return (
    <ol className="border-t border-(--color-border-gray)">
      {data
        .slice()
        .reverse()
        .map((item) => (
          <li
            key={item.id}
            className="grid grid-cols-1 gap-2 border-b border-(--color-border-gray) py-6 sm:grid-cols-[160px_1fr] sm:gap-8"
          >
            <span className="text-xs tracking-wider text-(--color-text-secondary) uppercase sm:pt-1">
              {item.periodo}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-textMain">
                {item.curso ?? item.cargo}
              </h3>
              <p className="mb-2 text-sm text-(--color-text-secondary)">
                {item.instituicao}
              </p>
              {item.descricao && (
                <p className="max-w-prose text-(--color-text-secondary)">
                  {item.descricao}
                </p>
              )}
            </div>
          </li>
        ))}
    </ol>
  );
}

export default ExperienceList;
