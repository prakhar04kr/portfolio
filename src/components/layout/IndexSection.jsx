import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { CARDS } from '../../data/cards'

function IndexSection({ onCardClick }) {
  const { t } = useTranslation()

  return (
    <section className="relative z-10 flex min-h-[50vh] flex-col items-center justify-center px-6 py-32">
      <p className="mb-8 text-sm uppercase tracking-[0.2em] text-[rgba(242,242,255,0.28)]">
        {t('explore.label')}
      </p>
      <div className="flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {CARDS.map((card) => (
          <button
            key={card.id}
            onClick={() => onCardClick(card.id)}
            className="group relative text-2xl font-bold text-[rgba(242,242,255,0.35)] transition-colors hover:text-white md:text-4xl"
          >
            {card.title}
            <span
              className="absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
              style={{ background: card.accent }}
            />
          </button>
        ))}
      </div>
    </section>
  )
}

export default memo(IndexSection)
