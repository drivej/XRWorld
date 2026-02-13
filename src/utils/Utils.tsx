import { OS, WaveModel } from '../models/models';
export const inBrowser = typeof window != 'undefined';
export const isWebkit = inBrowser && (window as unknown as Record<string, unknown>)?.webkitAudioContext ? true : false;

export function initBrowser() {
  Object.assign(document.body.style, { margin: 0, padding: 0, height: '100%', overflow:'hidden' });
}

export function formatFollowers(n: number) {
  if (n > 10000) {
    return `${(n / 1000).toFixed(0)}K`;
  }
  if (n > 1100) {
    return `${(n / 1000).toFixed(1)}K`;
  }
  if (n > 1000) {
    return `${(n / 1000).toFixed(0)}K`;
  }
  return n;
}
// REF: https://stackoverflow.com/questions/56844236/merge-two-arrays-of-different-lengths-alternatively-javascript
// This is alien logic - proof that they live among us...
// export const interleave = ([x, ...xs], ys) => (x ? [x, ...interleave(ys, xs)] : ys);

export function interleavePosts<T>(array1: (T & { id: string })[], array2: (T & { id: string })[]): T[] {
  // skip if one array is empty
  if (array1.length === 0) return [...array2];
  if (array2.length === 0) return [...array1];
  const len = Math.max(array1.length, array2.length);
  const result = [];
  const uniqueIds = new Set();
  for (let i = 0; i < len; i++) {
    if (array1[i] !== undefined) {
      if (!uniqueIds.has(array1[i].id)) {
        result.push(array1[i]);
        uniqueIds.add(array1[i].id);
      }
    }

    if (array2[i] !== undefined) {
      if (!uniqueIds.has(array2[i].id)) {
        result.push(array2[i]);
        uniqueIds.add(array2[i].id);
      }
    }
  }
  return result;
}

export function removeEmptyProps<T>(o: T) {
  return Object.keys(o).reduce((q, k) => {
    if (o[k] !== '' && o[k] !== null && o[k] !== undefined && o[k]?.length !== 0) {
      q[k] = o[k];
    }
    return q;
  }, {});
}

let __UID_INT = 0;

export const getUID = (): string => {
  return `u${__UID_INT++}`;
};

export const getMobileOperatingSystem = (): OS => {
  if (!inBrowser) return OS.SERVER;
  const userAgent = navigator.userAgent || navigator.vendor;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return OS.WINDOWS_PHONE;
  }

  if (/android/i.test(userAgent)) {
    return OS.ANDROID;
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as unknown as Record<string, unknown>).MSStream) {
    return OS.IOS;
  }

  return OS.UNKNOWN; //'unknown';
};

export function containsEncodedComponents(x) {
  // ie ?,=,&,/ etc
  return decodeURI(x) !== decodeURIComponent(x);
}

export const toBgUrl = (url: string) => `url("${containsEncodedComponents(url) ? decodeURI(url) : url}")`;

export function deorphan(str: string): string {
  str = String(str).replace(/^\s+|\s+$/g, '');
  const words = str.split(' ');
  if (words.length > 3) {
    const last = words.pop();
    const next = words.pop();
    const start = words.join(' ');
    return `${start} ${next}\u00a0${last}`;
  } else {
    return str;
  }
}

export const decompressWave = (wave: WaveModel): WaveModel => {
  if (wave?.length == null || wave.length == 0) {
    return [];
  }

  const minDInt = 4294967296;

  let data = [];
  for (let i = 0; i < wave.length; i++) {
    const w = wave[i];
    const b0 = w % minDInt;
    const d0 = b0;
    const d1 = (w - b0) / minDInt;

    for (let k = 0; k < 2; k++) {
      const d = k == 0 ? d0 : d1;
      // split into 10 tuples
      for (let j = 0; j < 10; j++) {
        const pos = j * 3;
        const tuple = ((7 << pos) & d) >> pos;
        const val = (tuple * 12.5) / 100;
        data.push(val);
      }
    }
  }
  // trim trailing zeros
  let end = data.length;
  for (let i = data.length - 1; i >= 0; i--) {
    if (data[i] > 0.0) {
      end = i + 1;
      break;
    }
  }
  if (end < data.length) {
    const trim = new Array(end);
    for (let i = 0; i < end; i++) {
      trim[i] = data[i];
    }
    data = trim;
  }

  return data;
};

const LEAD_URL_MATCH = /^(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~!#?&//=]*))/gi;

export function getFirstUrl(str: string): string {
  return str?.match(LEAD_URL_MATCH)?.[0] ?? null;
}

export function stripFirstUrl(str: string): string {
  return str?.replace(LEAD_URL_MATCH, '').trim();
}

export interface Duration {
  milliseconds: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
}

const UTC = {
  day: 1000 * 60 * 60 * 24,
  hour: 1000 * 60 * 60,
  minute: 1000 * 60,
  second: 1000
};

export function toDuration(milliseconds: number): Duration {
  return {
    days: ~~(milliseconds / UTC.day), //
    hours: ~~((milliseconds % UTC.day) / UTC.hour),
    minutes: ~~((milliseconds % UTC.hour) / UTC.minute),
    seconds: ~~((milliseconds % UTC.minute) / UTC.second),
    milliseconds: milliseconds % UTC.second
  };
}

export function formatDuration(seconds: number): string {
  if (isNaN(seconds)) return '';
  seconds = Math.round(seconds);
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${('0' + s).slice(-2)}`;
}

export function formatDate(dateStr: string) {
  try {
    const date = new Date(Date.parse(dateStr));
    const americanDate = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date);
    return americanDate;
  } catch (err) {
    return '';
  }
}

export function isSwellDomain(url: string): boolean {
  return /^(?:https?:\/\/)app(stage)?.swell.life/i.test(url) || /^(?:https?:\/\/)stageshort.swell.life/i.test(url);
}

export function isValidUrl(value: string): boolean {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
}

export function slugify(input: string, id?: string, defaultSlug = 'swell'): string {
  const removeStopWords = input.split(/\s+/g).length > MAX_SLUG_WORDS; // if source string has few words, don't replace stop words

  const output = input
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(specialCharsRegEx, (c) => specialCharsTo.charAt(specialCharsFrom.indexOf(c))) // Replace special characters
    .replace(/[^\w-]+/g, '') // Remove all non-word characters
    .replace(removeStopWords ? stopWordsReg : /^\?/, '') // remove stop words (english only)
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
    .split('-')
    .slice(0, MAX_SLUG_WORDS) // grab 5 words (optimal 3-5 words)
    .join('-')
    .replace(/$/, id ? `-${id}` : ''); // optionally add id into slug
  return output || defaultSlug;
}

const MAX_SLUG_WORDS = 5;
const specialCharsFrom = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
const specialCharsTo = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
const specialCharsRegEx = new RegExp(specialCharsFrom.split('').join('|'), 'g');
const stopWordsReg =
  /\b(a|about|above|actually|after|again|against|all|almost|also|although|always|am|an|and|any|are|as|at|be|became|become|because|been|before|being|below|between|both|but|by|can|could|did|do|does|doing|down|during|each|either|else|few|for|from|further|had|has|have|having|he|hed|hell|hence|hes|her|here|heres|hers|herself|him|himself|his|how|hows|i|id|ill|im|ive|if|in|into|is|it|its|its|itself|just|lets|may|maybe|me|might|mine|more|most|must|my|myself|neither|nor|not|of|oh|on|once|only|ok|or|other|ought|our|ours|ourselves|out|over|own|same|she|shed|shell|shes|should|so|some|such|than|that|thats|the|their|theirs|them|themselves|then|there|theres|these|they|theyd|theyll|theyre|theyve|this|those|through|to|too|under|until|up|very|was|we|wed|well|were|weve|were|what|whats|when|whenever|whens|where|whereas|wherever|wheres|whether|which|while|who|whoever|whos|whose|whom|why|whys|will|with|within|would|yes|yet|you|youd|youll|youre|youve|your|yours|yourself|yourselves)\b/g;
