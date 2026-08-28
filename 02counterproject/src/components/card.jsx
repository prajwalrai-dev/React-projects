import React from 'react'


function Card({course, arr, btn="Click me", count="10"}) {

  return (
    <div class="rounded-3xl border p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group border-amber-200/80 dark:border-amber-900/40 bg-amber-50/30 dark:bg-amber-950/10 hover:border-amber-400 dark:hover:border-amber-700/60 hover:shadow-amber-500/10 mb-2.5">
      <div class="space-y-6">
        <div class="flex items-start justify-between gap-3">
          <a class="flex items-center gap-3 group/title" href="/sessions/">
            <div class="h-12 w-12 rounded-2xl text-white flex items-center justify-center shadow-lg group-hover/title:scale-105 transition-transform duration-300 shrink-0 bg-amber-500 shadow-amber-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-6 w-6">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-extrabold text-xl text-foreground tracking-tight transition-colors group-hover/title:text-amber-600">
                {course}
              </h3>
              <p class="text-xs text-muted-foreground font-medium">
                Learn from those who already did it in {arr} months
              </p>
            </div>
          </a>
        </div>

        <div class="space-y-2 pt-2">
          <a class="flex items-center justify-between gap-2 p-2 rounded-xl transition-all group/item cursor-pointer hover:bg-amber-100/60 dark:hover:bg-amber-900/30" href="/sessions/">
            <div class="flex items-start gap-3">
              <div class="p-2 rounded-lg shrink-0 mt-0.5 transition-colors bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-300 group-hover/item:bg-amber-500 group-hover/item:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video h-4 w-4">
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                  <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                </svg>
              </div>
              <div>
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h4 class="text-xs font-bold text-foreground transition-colors group-hover/item:text-amber-600 dark:group-hover/item:text-amber-400">
                    Live {count} Sessions
                  </h4>
                </div>
                <p class="text-[11px] text-muted-foreground leading-tight">
                  Learn in live sessions with achievers
                </p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-4 w-4 opacity-40 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all shrink-0 text-muted-foreground group-hover/item:text-amber-600 dark:group-hover/item:text-amber-400">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
          <a class="flex items-center justify-between gap-2 p-2 rounded-xl transition-all group/item cursor-pointer hover:bg-amber-100/60 dark:hover:bg-amber-900/30" href="/mentors/">
            <div class="flex items-start gap-3">
              <div class="p-2 rounded-lg shrink-0 mt-0.5 transition-colors bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-300 group-hover/item:bg-amber-500 group-hover/item:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus h-4 w-4">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <line x1="19" x2="19" y1="8" y2="14"></line>
                  <line x1="22" x2="16" y1="11" y2="11"></line>
                </svg>
              </div>
              <div>
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h4 class="text-xs font-bold text-foreground transition-colors group-hover/item:text-amber-600 dark:group-hover/item:text-amber-400">
                    1:1 Mentorship
                  </h4>
                </div>
                <p class="text-[11px] text-muted-foreground leading-tight">
                  Personal guidance from top seniors
                </p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-4 w-4 opacity-40 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all shrink-0 text-muted-foreground group-hover/item:text-amber-600 dark:group-hover/item:text-amber-400">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
          <a class="flex items-center justify-between gap-2 p-2 rounded-xl transition-all group/item cursor-pointer hover:bg-amber-100/60 dark:hover:bg-amber-900/30" href="/sessions/">
            <div class="flex items-start gap-3">
              <div class="p-2 rounded-lg shrink-0 mt-0.5 transition-colors bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-300 group-hover/item:bg-amber-500 group-hover/item:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-check h-4 w-4">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="m9 15 2 2 4-4"></path>
                </svg>
              </div>
              <div>
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h4 class="text-xs font-bold text-foreground transition-colors group-hover/item:text-amber-600 dark:group-hover/item:text-amber-400">
                    Resume &amp Mock Interview
                  </h4>
                </div>
                <p class="text-[11px] text-muted-foreground leading-tight">
                  Get live feedback from placed seniors
                </p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-4 w-4 opacity-40 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all shrink-0 text-muted-foreground group-hover/item:text-amber-600 dark:group-hover/item:text-amber-400">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
          <a class="flex items-center justify-between gap-2 p-2 rounded-xl transition-all group/item cursor-pointer hover:bg-amber-100/60 dark:hover:bg-amber-900/30" href="/roadmap/">
            <div class="flex items-start gap-3">
              <div class="p-2 rounded-lg shrink-0 mt-0.5 transition-colors bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-300 group-hover/item:bg-amber-500 group-hover/item:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass h-4 w-4">
                  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <div>
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h4 class="text-xs font-bold text-foreground transition-colors group-hover/item:text-amber-600 dark:group-hover/item:text-amber-400">
                    Career Guidance
                  </h4>
                </div>
                <p class="text-[11px] text-muted-foreground leading-tight">
                  Clarity, strategy &amp roadmap help
                </p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-4 w-4 opacity-40 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all shrink-0 text-muted-foreground group-hover/item:text-amber-600 dark:group-hover/item:text-amber-400">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="pt-6 space-y-3 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 w-full rounded-xl text-white font-extrabold py-5 text-xs shadow-md flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-all cursor-pointer bg-amber-500 hover:bg-amber-600 shadow-amber-500/20" href="/sessions/">
        <span>{btn}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>

      </div>
    </div>
  )
}


export default Card
