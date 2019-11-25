interface SessionStart {
  type: 'SESSION_START';
}
interface SessionStop {
  type: 'SESSION_STOP';
}
interface NextSerie {
  type: 'NEXT_SERIE';
}

export type SessionActions = SessionStart | SessionStop | NextSerie;
