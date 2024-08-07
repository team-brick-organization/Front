function SocialTagsSection({
  tags,
  initialTags,
}: {
  tags: string[]
  initialTags?: string[]
}) {
  return (
    <div className="flex flex-col gap-8pxr">
      <label className="text-gray-10 font-title-04">모임 태그</label>
      <ul className="flex gap-8pxr">
        {(initialTags || tags).map((tag) => (
          <li key={tag}>
            <div
              className={`rounded-[0.3125rem] bg-gray-03 px-14pxr py-10pxr text-gray-06 font-body-02 ${initialTags ? 'bg-gray-03' : ''}`}
            >
              {tag}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialTagsSection
