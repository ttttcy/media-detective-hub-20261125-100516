import { modules } from './data.js';

export const round = n => Math.round((n + Number.EPSILON) * 10) / 10;
export function scoreGroup(group, selected = []) {
  const valid = new Set(selected.filter(id => group.options.some(o => o.id === id)));
  const hits = group.correct.filter(id => valid.has(id)).length;
  const earned = group.multiple ? group.points * hits / group.correct.length : (valid.size === 1 && hits === 1 ? group.points : 0);
  return { earned, possible:group.points, selected:valid.size, hits, wrong:[...valid].filter(id=>!group.correct.includes(id)).length, missed:group.correct.length-hits, allSelected:group.multiple && valid.size===group.options.length, category:group.category, multiple:group.multiple };
}
export function scoreModule(module, answers) {
  const result = {id:module.id,score:0,possible:0,selected:0,wrong:0,missed:0,multiSelected:0,multiWrong:0,allSelected:0,multiGroups:0,submitted:0};
  for (const q of module.questions) {
    const answer=answers[q.id];
    if(answer) result.submitted++;
    for(const g of q.groups){
      const s=scoreGroup(g,answer?.choices[g.id]);
      result.possible+=s.possible;
      result.score+=s.earned;
      result.selected+=s.selected;
      result.wrong+=s.wrong;
      result.missed+=s.missed;
      if(s.multiple){result.multiGroups++;result.multiSelected+=s.selected;result.multiWrong+=s.wrong;}
      if(s.allSelected)result.allSelected++;
    }
  }
  result.score=result.possible?round(result.score/result.possible*100):null;
  result.possible=round(result.possible);
  return result;
}
export function validChoices(question, choices) {
  return question.groups.every(g=>{
    const selected=choices[g.id]??[];
    return (g.optional || selected.length>0) && (g.multiple || selected.length===1) && selected.every(id=>g.options.some(o=>o.id===id));
  });
}
export function submitAnswer(state, question, choices, now=Date.now()) {
  if(state.answers[question.id] || !validChoices(question,choices)) return false;
  state.answers[question.id]={choices:structuredClone(choices),submittedAt:now};
  return true;
}
export function buildReport(state) {
  if(!modules.every(m=>state.completed.includes(m.id))) return null;
  const stages=modules.map((m,i)=>({...scoreModule(m,state.answers),title:m.title,minutes:m.minutes,breakdown:m.questions.flatMap(q=>q.groups.map(g=>({questionId:q.id,label:q.scoreLabel??q.title,earned:round(scoreGroup(g,state.answers[q.id]?.choices[g.id]).earned),possible:g.points})))}));
  const scoredStages=stages.filter(s=>s.score!=null);
  const initial=state.answers.N1Q1.choices.judgment[0];
  const final=state.answers.N4Q1.choices.judgment[0];
  const revision=state.answers.N1Q5.choices.judgment[0];
  const revisionGroup=modules[0].questions.at(-1).groups[0];
  const start=modules[0].questions[0].groups[0];
  const end=modules.find(m=>m.id==='N4').questions.find(q=>q.id==='N4Q1').groups[0];
  return {
    version:'1.8.1', product:'智媒侦察局', mode:'demo', notice:'N1包含新闻视频初判、细节观察和复判；N2照片真伪按提供者标签设置；N3使用提供者标注为真实的视频；N4包含网传桥梁视频与四段观察，最后观看事件解读报道。成绩仅用于训练反馈，不构成正式能力测评。',
    generatedAt:new Date(state.finishedAt??Date.now()).toISOString(),
    elapsedSeconds:Math.floor(((state.finishedAt??Date.now())-state.startedAt)/1000),
    stages,
    average:round(scoredStages.reduce((s,m)=>s+m.score,0)/scoredStages.length),
    change:round(stages.at(-1).score-stages[0].score),
    initial:{choice:start.options.find(o=>o.id===initial).text,answer:start.options.filter(o=>start.correct.includes(o.id)).map(o=>o.text).join('；'),correct:start.correct.includes(initial)},
    revision:{choice:revisionGroup.options.find(o=>o.id===revision).text,correct:revisionGroup.correct.includes(revision)},
    final:{choice:end.options.find(o=>o.id===final).text,correct:end.correct.includes(final)},
    totalMultiSelected:stages.reduce((s,m)=>s+m.multiSelected,0),
    totalMultiWrong:stages.reduce((s,m)=>s+m.multiWrong,0),
    allSelectedGroups:stages.reduce((s,m)=>s+m.allSelected,0),
    categories:stages.filter(s=>s.score!=null).map(s=>[s.title,s.score,s.id]),
    answers:structuredClone(state.answers)
  };
}
