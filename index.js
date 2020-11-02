function validateLineup(lineup) {
  return playerCounter(lineup) &&
 gameCounter(lineup) &&
 positionCounter(lineup) &&
 payroll(lineup) &&
 lineup.length === 9
}
function playerCounter(lineup) {
  const teamCounter = lineup.reduce((agg, player) => {
    const { teamId } = player

    if (agg[teamId]) {
      agg[teamId]++
    } else {
      agg[teamId] = 1
    }

    return agg
  }, {})

  for (let index in teamCounter) {
    if (teamCounter[index] > 2) return false
  }

  return true
}
function gameCounter(lineup) {
  const game = lineup.reduce((agg, player) => {
    const { gameID } = player

    if (agg[gameID]) {
      agg[gameID]++
    } else {
      agg[gameID] = 1
    }

    return agg
  }, {})

  for (let index in game) {
    if (game[index] > 3) return false
  }

  return true
}
function positionCounter(lineup) {
  const positionCount = lineup.map(lineup => lineup.position)
  const countPosition = positionCount.reduce((agg, position) => {
    agg[position] = (agg[position] || 0) + 1

    return agg
  }, {})

  for (let index in positionCount) {
    if (positionCount[index] > 1) return false
  }

  return true
}
function totalSalary(lineup) {
  const totalSalary = lineup.map(lineup => lineup.salary)
  const salaryTotal = totalSalary.reduce((agg, salary) => {
    agg[salary] = (agg[salary] || 0) + 1

    return agg
  }, {})

  for (let index in totalSalary) {
    if (totalSalary[index] > 45000) return false
  }

  return true
}

module.exports = validateLineup
